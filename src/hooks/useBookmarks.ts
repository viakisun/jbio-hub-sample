import { useState, useEffect, useCallback } from 'react';
import { Company, Article } from '../types/api';

// This is a mock token for development.
// In a real app, this would come from an auth context or store.
const MOCK_AUTH_TOKEN = 'fake-jwt-token-for-user-1';

const useBookmarks = () => {
  const [bookmarkedCompanies, setBookmarkedCompanies] = useState<Company[]>([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
  const apiPrefix = process.env.REACT_APP_API_PREFIX || '/api';
  const bookmarksUrl = `${apiUrl}${apiPrefix}/users/me/bookmarks`;

  const getHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${MOCK_AUTH_TOKEN}`,
  });

  const fetchBookmarks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [companiesRes, articlesRes] = await Promise.all([
        fetch(`${bookmarksUrl}/companies`, { headers: getHeaders() }),
        fetch(`${bookmarksUrl}/articles`, { headers: getHeaders() }),
      ]);

      if (!companiesRes.ok || !articlesRes.ok) {
        throw new Error('Failed to fetch bookmarks');
      }

      const companies = await companiesRes.json();
      const articles = await articlesRes.json();

      setBookmarkedCompanies(companies);
      setBookmarkedArticles(articles);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [bookmarksUrl]);

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  const addCompanyBookmark = async (companyId: string) => {
    await fetch(`${bookmarksUrl}/companies`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ companyId }),
    });
    await fetchBookmarks();
  };

  const removeCompanyBookmark = async (companyId: string) => {
    await fetch(`${bookmarksUrl}/companies/${companyId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    await fetchBookmarks();
  };

  const addArticleBookmark = async (articleId: string) => {
    await fetch(`${bookmarksUrl}/articles`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ articleId }),
    });
    await fetchBookmarks();
  };

  const removeArticleBookmark = async (articleId: string) => {
    await fetch(`${bookmarksUrl}/articles/${articleId}`, {
        method: 'DELETE',
        headers: getHeaders(),
    });
    await fetchBookmarks();
  };

  const isCompanyBookmarked = (companyId: string) =>
    bookmarkedCompanies.some(c => c.id === companyId);

  const isArticleBookmarked = (articleId: string) =>
    bookmarkedArticles.some(a => a.id === articleId);

  return {
    bookmarkedCompanies,
    bookmarkedArticles,
    addCompanyBookmark,
    removeCompanyBookmark,
    addArticleBookmark,
    removeArticleBookmark,
    isCompanyBookmarked,
    isArticleBookmarked,
    loading,
    error,
    refetch: fetchBookmarks,
  };
};

export default useBookmarks;
