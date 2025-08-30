import React from 'react';
import MainLayout from '../../templates/MainLayout';
import Button from '../../atoms/Button';
import Badge from '../../atoms/Badge';
import NewsCard from '../../molecules/NewsCard';
import EventCard from '../../molecules/EventCard';
import CompanyCard from '../../molecules/CompanyCard';
import SearchBar from '../../molecules/SearchBar';
import Tabs from '../../molecules/Tabs';
import Pagination from '../../molecules/Pagination';
import { useState } from 'react';

/**
 * ## Style Guide Page
 * This page is a living document that showcases the redesigned components of the JB SQUARE platform.
 * It's used for development and verification purposes.
 *
 * @returns {JSX.Element}
 */
const StyleGuidePage = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [currentPage, setCurrentPage] = useState(3);
  const tabs = [
    { id: 'tab1', label: 'Tab One' },
    { id: 'tab2', label: 'Tab Two' },
    { id: 'tab3', label: 'Tab Three' },
  ];

  return (
    <MainLayout>
      <div className="style-guide-container">
        <h1>JB SQUARE Design System</h1>
        <p>This page displays the redesigned components for the JB SQUARE platform.</p>

        <section className="style-guide-section">
          <h2>Buttons</h2>
          <div className="component-showcase">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button>Default (Primary)</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <div className="component-showcase" style={{ background: '#333', padding: '24px', borderRadius: '16px' }}>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="ghost" disabled>Disabled Ghost</Button>
          </div>
        </section>

        <section className="style-guide-section">
          <h2>Cards</h2>
          <div className="component-showcase">
            <div className="card" style={{ width: '300px' }}>
              <div className="card__title">Light Card Title</div>
              <div className="card__meta">Meta information</div>
              <div className="card__body">
                <p>This is the body of the light card.</p>
              </div>
              <div className="card__actions">
                <Button variant="primary">Action</Button>
                <Button variant="secondary">Another Action</Button>
              </div>
            </div>
            <div className="card card--dark" style={{ width: '300px' }}>
              <div className="card__title">Dark Card Title</div>
              <div className="card__meta">Meta information</div>
              <div className="card__body">
                <p>This is the body of the dark card.</p>
              </div>
              <div className="card__actions">
                <Button variant="ghost">Action</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="style-guide-section">
          <h2>Badges & Tags</h2>
          <div className="component-showcase">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
          <div className="component-showcase">
            <span className="tag tag--open">Open</span>
            <span className="tag tag--planned">Planned</span>
            <span className="tag tag--closed">Closed</span>
          </div>
        </section>

        <section className="style-guide-section">
          <h2>News Card</h2>
          <div className="component-showcase" style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column' }}>
            <NewsCard news={{
              id: 1,
              title: 'JB SQUARE Launches New AI-Powered Research Platform',
              summary: 'The new platform promises to accelerate drug discovery and development by leveraging cutting-edge AI.',
              content: 'Full content of the news article would go here.',
              thumbnailUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop',
              category: 'news',
              sourceName: 'BioTech Today',
              created_at: new Date().toISOString(),
            }} />
            <NewsCard news={{
              id: 2,
              title: 'Important Announcement: Annual Conference Postponed',
              summary: 'The annual conference has been postponed to a later date. More details to follow.',
              content: 'Full content of the notice would go here.',
              thumbnailUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
              category: 'notice',
              sourceName: 'JB SQUARE',
              created_at: new Date().toISOString(),
            }} />
          </div>
        </section>

        <section className="style-guide-section">
          <h2>Event Card</h2>
          <div className="component-showcase" style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column' }}>
            <EventCard event={{
              id: 1,
              title: 'JB SQUARE Bio Innovation Conference 2024',
              thumbnailUrl: 'https://images.unsplash.com/photo-1560439546-3965b62b5d89?q=80&w=1974&auto=format&fit=crop',
              eventStartAt: new Date('2024-10-26').toISOString(),
              eventEndAt: new Date('2024-10-28').toISOString(),
              locationType: 'offline',
              locationName: 'Seoul, South Korea',
              host: 'JB SQUARE',
              category: 'event',
              status: '예정',
            }} />
            <EventCard event={{
              id: 2,
              title: 'AI in Medicine Symposium',
              thumbnailUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
              eventStartAt: new Date().toISOString(),
              eventEndAt: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
              locationType: 'online',
              locationName: 'Online',
              host: 'BioInnovate Inc.',
              category: 'event',
              status: '진행중',
            }} />
          </div>
        </section>

        <section className="style-guide-section">
          <h2>Company Card</h2>
          <div className="component-showcase" style={{ maxWidth: '400px' }}>
            <CompanyCard company={{
              id: '1',
              name: 'BioInnovate Inc.',
              logoUrl: 'https://logo.clearbit.com/google.com',
              industry: 'Biotechnology',
              foundedYear: 2015,
              description: 'Pioneering new frontiers in gene editing and personalized medicine.',
              sizeCategory: 'SME',
              products: ['Gene sequencing', 'CRISPR kits'],
              region: 'Seoul',
              employees: 250,
              achievements: ['Won the "Bio-Innovation of the Year" award in 2023.'],
              patents: ['Patent for novel gene-editing technique (KR-2023-001234)'],
              contact: { name: 'Dr. Evelyn Reed', email: 'e.reed@bioinnovate.com', phone: '+82-2-1234-5678' },
              relatedArticles: [],
            }} />
          </div>
        </section>

        <section className="style-guide-section">
          <h2>Search Bar</h2>
          <div className="component-showcase" style={{ background: '#1e1e1e', padding: '40px', justifyContent: 'center' }}>
            <SearchBar placeholder="Search for technologies, companies, etc." />
          </div>
        </section>

        <section className="style-guide-section">
          <h2>Tabs</h2>
          <div className="component-showcase" style={{ background: '#1e1e1e', padding: '40px', display: 'block' }}>
            <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
            <div style={{ marginTop: '24px', color: 'white' }}>
              Content for {tabs.find(t => t.id === activeTab)?.label}
            </div>
          </div>
        </section>

        <section className="style-guide-section">
          <h2>Pagination</h2>
          <div className="component-showcase" style={{ background: '#1e1e1e', padding: '40px', justifyContent: 'center' }}>
            <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
          </div>
        </section>

      </div>
    </MainLayout>
  );
};

export default StyleGuidePage;
