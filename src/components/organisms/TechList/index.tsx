import React, { useState } from 'react';
import Tabs from '../../molecules/Tabs';
import Pagination from '../../molecules/Pagination';
import ArticleCard from '../../molecules/ArticleCard';
import { Article } from '../../../types/api';

// Placeholder data for the list of technologies
const allTechData: Article[] = [
  { id: 'tech-1', title: 'Quantum-Enhanced Drug Discovery', author: 'BioQuantum Labs', publishDate: '2023-10-26T12:00:00Z', tags: ['Quantum Computing', 'AI', 'Pharma'], images: ['https://images.unsplash.com/photo-1581092921462-68781a7b3ce6?q=80&w=2070&auto=format&fit=crop'], relatedCompanies: [], contentHTML: '' },
  { id: 'tech-2', title: 'CRISPR-Cas9 Gene Editing V2', author: 'GeneSys Corp', publishDate: '2023-10-25T12:00:00Z', tags: ['Gene Editing', 'CRISPR'], images: ['https://images.unsplash.com/photo-1631599187920-ded8220808a3?q=80&w=2070&auto=format&fit=crop'], relatedCompanies: [], contentHTML: '' },
  { id: 'tech-3', title: 'AI-Powered Protein Folding', author: 'Protein Dynamics', publishDate: '2023-10-24T12:00:00Z', tags: ['AI', 'Protein Folding'], images: ['https://images.unsplash.com/photo-1628334882270-039785041071?q=80&w=2070&auto=format&fit=crop'], relatedCompanies: [], contentHTML: '' },
  { id: 'tech-4', title: 'Next-Gen Sequencing', author: 'Genome Inc.', publishDate: '2023-10-23T12:00:00Z', tags: ['Genomics'], images: ['https://images.unsplash.com/photo-1581093583449-74b8a1c8a8d6?q=80&w=2070&auto=format&fit=crop'], relatedCompanies: [], contentHTML: '' },
  { id: 'tech-5', title: 'Personalized Medicine AI', author: 'HealthAI', publishDate: '2023-10-22T12:00:00Z', tags: ['AI', 'Medicine'], images: ['https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop'], relatedCompanies: [], contentHTML: '' },
  { id: 'tech-6', title: 'Bio-Ink for 3D Printing Organs', author: 'Organovo', publishDate: '2023-10-21T12:00:00Z', tags: ['3D Printing', 'Bio-Ink'], images: ['https://images.unsplash.com/photo-1606024340360-10c85072e4e4?q=80&w=2070&auto=format&fit=crop'], relatedCompanies: [], contentHTML: '' },
  { id: 'tech-7', title: 'Smart Inhalers', author: 'PharmaTech', publishDate: '2023-10-20T12:00:00Z', tags: ['IoT', 'Pharma'], images: ['https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop'], relatedCompanies: [], contentHTML: '' },
  { id: 'tech-8', title: 'Robotic Surgery Systems', author: 'SurgiBot', publishDate: '2023-10-19T12:00:00Z', tags: ['Robotics', 'Medicine'], images: ['https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop'], relatedCompanies: [], contentHTML: '' },
];

const TechList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'genomics', label: 'Genomics' },
    { id: 'pharma', label: 'Pharmaceuticals' },
  ];

  // In a real app, this would filter based on the active tab and fetch from an API
  const paginatedData = allTechData.slice((currentPage - 1) * 6, currentPage * 6);

  return (
    <div className="tech-list">
      <div className="tech-list__header">
        <h2 className="tech-list__title">All Technologies</h2>
        <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      </div>
      <div className="tech-list__grid">
        {paginatedData.map(tech => (
          <ArticleCard key={tech.id} article={tech} />
        ))}
      </div>
      <div className="tech-list__footer">
        <Pagination currentPage={currentPage} totalPages={Math.ceil(allTechData.length / 6)} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};

export default TechList;
