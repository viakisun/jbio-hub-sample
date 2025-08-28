import React from 'react';
import Timeline from '../../molecules/Timeline';
import NoticeCard, { NoticeCardData } from '../../molecules/NoticeCard';
import Icon from '../../atoms/Icon';

const timelineSteps = [
  { icon: 'fileText', title: '온라인 신청/접수', description: '홈페이지를 통해 신청서와 사업계획서를 제출합니다.' },
  { icon: 'clipboard', title: '서류 심사', description: '제출된 서류를 바탕으로 자격 요건 및 사업성을 평가합니다.' },
  { icon: 'users', title: '발표 심사', description: '서류 심사 통과 기업을 대상으로 대면 발표 심사를 진행합니다.' },
  { icon: 'award', title: '최종 선정 및 계약', description: '최종 입주 기업을 선정하고 계약을 체결합니다.' },
  { icon: 'logIn', title: '입주', description: '센터에 입주하여 지원 프로그램을 시작합니다.' },
];

const requiredDocs = [
    { fileName: '입주신청서 및 사업계획서.hwp', fileUrl: '#', fileSize: '1.2MB' },
    { fileName: '개인정보 수집·이용 동의서.pdf', fileUrl: '#', fileSize: '300KB' },
    { fileName: '대표자 이력서.doc', fileUrl: '#', fileSize: '500KB' },
];

const mockNotices: NoticeCardData[] = [
    { id: 'notice-1', title: '2024년 하반기 신규 입주기업 모집 공고', targetCriteria: '창업 7년 미만 바이오 기업', periodEnd: '2024-09-30', applyUrl: '#' },
    { id: 'notice-2', title: '1인 창조기업 지원실 입주기업 모집', targetCriteria: '1인 창조기업 및 예비창업자', periodEnd: '2024-10-15', applyUrl: '#' },
];

const ApplyView = () => {
  return (
    <div className="incubation-tab-view apply-view">
      <section className="section">
        <h2 className="section-title">입주 절차</h2>
        <Timeline steps={timelineSteps} />
      </section>

      <section className="section">
        <h2 className="section-title">제출 서류</h2>
        <div className="apply-view__document-list">
            {requiredDocs.map(doc => (
                <a key={doc.fileName} href={doc.fileUrl} download className="apply-view__document-link">
                    <Icon name="download" size={16} />
                    {doc.fileName} ({doc.fileSize})
                </a>
            ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">모집 공고</h2>
        <div className="apply-view__notice-list">
            {mockNotices.map(notice => (
                <NoticeCard key={notice.id} notice={notice} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ApplyView;
