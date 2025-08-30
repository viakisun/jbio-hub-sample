import React from 'react';
import ArticleCard from '../../molecules/ArticleCard';
import { Article } from '../../../types/api';

// Placeholder data for featured technologies
const featuredTechData: Article[] = [
  {
    id: 'tech-1',
    title: 'Quantum-Enhanced Drug Discovery',
    author: 'BioQuantum Labs',
    publishDate: new Date().toISOString(),
    tags: ['Quantum Computing', 'AI', 'Pharma'],
    images: ['https://images.unsplash.com/photo-1581092921462-68781a7b3ce6?q=80&w=2070&auto=format&fit=crop'],
    relatedCompanies: [],
    contentHTML: '',
  },
  {
    id: 'tech-2',
    title: 'CRISPR-Cas9 Gene Editing V2',
    author: 'GeneSys Corp',
    publishDate: new Date().toISOString(),
    tags: ['Gene Editing', 'CRISPR'],
    images: ['https://images.unsplash.com/photo-1631599187920-ded8220808a3?q=80&w=2070&auto=format&fit=crop'],
    relatedCompanies: [],
    contentHTML: '',
  },
  {
    id: 'tech-3',
    title: 'AI-Powered Protein Folding',
    author: 'Protein Dynamics',
    publishDate: new Date().toISOString(),
    tags: ['AI', 'Protein Folding'],
    images: ['https://images.unsplash.com/photo-1628334882270-039785041071?q=80&w=2070&auto=format&fit=crop'],
    relatedCompanies: [],
    contentHTML: '',
  },
];

const FeaturedTech = () => {
  return (
    <div className="featured-tech">
      <h2 className="featured-tech__title">Featured Technologies</h2>
      <div className="featured-tech__grid">
        {featuredTechData.map(tech => (
          <ArticleCard key={tech.id} article={tech} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTech;
