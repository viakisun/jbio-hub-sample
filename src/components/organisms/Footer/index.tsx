import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: DESIGN_SYSTEM.colors.gray[900],
      color: DESIGN_SYSTEM.colors.gray[300]
    } as React.CSSProperties}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: `${DESIGN_SYSTEM.spacing[16]} ${DESIGN_SYSTEM.spacing[6]} ${DESIGN_SYSTEM.spacing[8]}`
      } as React.CSSProperties}>
        {/* 메인 푸터 콘텐츠 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: DESIGN_SYSTEM.spacing[12],
          marginBottom: DESIGN_SYSTEM.spacing[12]
        } as React.CSSProperties}>
          {/* 기관 정보 */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: DESIGN_SYSTEM.spacing[3],
              marginBottom: DESIGN_SYSTEM.spacing[6]
            } as React.CSSProperties}>
              <Icon name="logo" size={48} />
              <div>
                <div style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize['2xl'][0],
                  fontWeight: DESIGN_SYSTEM.typography.fontWeight.bold,
                  color: DESIGN_SYSTEM.colors.white
                } as React.CSSProperties}>
                  J BIO HUB
                </div>
                <div style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                  color: DESIGN_SYSTEM.colors.gray[400]
                } as React.CSSProperties}>
                  Jeonbuk Technopark
                </div>
              </div>
            </div>

            <div style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
              lineHeight: '1.6',
              color: DESIGN_SYSTEM.colors.gray[400],
              marginBottom: DESIGN_SYSTEM.spacing[6]
            } as React.CSSProperties}>
              전라북도 바이오산업의 혁신과 성장을 이끄는<br />
              대한민국 최고의 바이오 플랫폼입니다.
            </div>

            {/* 연락처 정보 */}
            <div style={{ marginBottom: DESIGN_SYSTEM.spacing[6] } as React.CSSProperties}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: DESIGN_SYSTEM.spacing[3],
                marginBottom: DESIGN_SYSTEM.spacing[3]
              } as React.CSSProperties}>
                <Icon name="phone" size={18} color={DESIGN_SYSTEM.colors.gray[400]} />
                <span style={{ fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0] } as React.CSSProperties}>
                  063-219-3000
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: DESIGN_SYSTEM.spacing[3],
                marginBottom: DESIGN_SYSTEM.spacing[3]
              } as React.CSSProperties}>
                <Icon name="mail" size={18} color={DESIGN_SYSTEM.colors.gray[400]} />
                <span style={{ fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0] } as React.CSSProperties}>
                  info@jbtp.or.kr
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: DESIGN_SYSTEM.spacing[3]
              } as React.CSSProperties}>
                <Icon name="mapPin" size={18} color={DESIGN_SYSTEM.colors.gray[400]} />
                <span style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                  lineHeight: '1.5'
                } as React.CSSProperties}>
                  전북 전주시 덕진구 첨단로 255<br />
                  전북테크노파크 바이오융합센터
                </span>
              </div>
            </div>
          </div>

          {/* 플랫폼 서비스 */}
          <div>
            <h4 style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0],
              fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
              color: DESIGN_SYSTEM.colors.white,
              margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`
            } as React.CSSProperties}>
              플랫폼 서비스
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' } as React.CSSProperties}>
              {[
                '연구개발 지원사업',
                '창업보육센터',
                '기업정보 데이터베이스',
                '기술정보 플랫폼',
                '투자유치 지원',
                '글로벌 진출 지원'
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: DESIGN_SYSTEM.spacing[2] } as React.CSSProperties}>
                  <a
                    href="#"
                    style={{
                      color: DESIGN_SYSTEM.colors.gray[400],
                      textDecoration: 'none',
                      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                      display: 'flex',
                      alignItems: 'center',
                      gap: DESIGN_SYSTEM.spacing[2]
                    } as React.CSSProperties}
                  >
                    <Icon name="arrowRight" size={12} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 산업 분야 */}
          <div>
            <h4 style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0],
              fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
              color: DESIGN_SYSTEM.colors.white,
              margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`
            } as React.CSSProperties}>
              바이오 산업분야
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' } as React.CSSProperties}>
              {[
                '바이오의약품',
                '의료기기',
                '바이오소재',
                '기능성 화장품',
                '바이오에너지',
                '농생명과학'
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: DESIGN_SYSTEM.spacing[2] } as React.CSSProperties}>
                  <a
                    href="#"
                    style={{
                      color: DESIGN_SYSTEM.colors.gray[400],
                      textDecoration: 'none',
                      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                      display: 'flex',
                      alignItems: 'center',
                      gap: DESIGN_SYSTEM.spacing[2]
                    } as React.CSSProperties}
                  >
                    <Icon name="arrowRight" size={12} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 기관 안내 */}
          <div>
            <h4 style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0],
              fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
              color: DESIGN_SYSTEM.colors.white,
              margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`
            } as React.CSSProperties}>
              기관 안내
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' } as React.CSSProperties}>
              {[
                '테크노파크 소개',
                '조직도',
                '찾아오시는 길',
                '채용정보',
                '입찰공고',
                '보도자료'
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: DESIGN_SYSTEM.spacing[2] } as React.CSSProperties}>
                  <a
                    href="#"
                    style={{
                      color: DESIGN_SYSTEM.colors.gray[400],
                      textDecoration: 'none',
                      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                      display: 'flex',
                      alignItems: 'center',
                      gap: DESIGN_SYSTEM.spacing[2]
                    } as React.CSSProperties}
                  >
                    <Icon name="arrowRight" size={12} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 style={{
              fontSize: DESIGN_SYSTEM.typography.fontSize.lg[0],
              fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
              color: DESIGN_SYSTEM.colors.white,
              margin: `0 0 ${DESIGN_SYSTEM.spacing[4]} 0`
            } as React.CSSProperties}>
              고객지원
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' } as React.CSSProperties}>
              {[
                '공지사항',
                '자주묻는질문',
                '온라인 문의',
                '기술지원',
                '사용자 가이드',
                '시스템 점검'
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: DESIGN_SYSTEM.spacing[2] } as React.CSSProperties}>
                  <a
                    href="#"
                    style={{
                      color: DESIGN_SYSTEM.colors.gray[400],
                      textDecoration: 'none',
                      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                      display: 'flex',
                      alignItems: 'center',
                      gap: DESIGN_SYSTEM.spacing[2]
                    } as React.CSSProperties}
                  >
                    <Icon name="arrowRight" size={12} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div style={{
          borderTop: `1px solid ${DESIGN_SYSTEM.colors.gray[700]}`,
          paddingTop: DESIGN_SYSTEM.spacing[8],
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: DESIGN_SYSTEM.spacing[4]
        } as React.CSSProperties}>
          <div style={{
            fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
            color: DESIGN_SYSTEM.colors.gray[500]
          } as React.CSSProperties}>
            © 2024 전라북도테크노파크. All rights reserved. |
            사업자등록번호: 403-82-11948 |
            대표자: 김철수
          </div>
          <div style={{
            display: 'flex',
            gap: DESIGN_SYSTEM.spacing[6],
            fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0]
          } as React.CSSProperties}>
            <a href="#" style={{ color: DESIGN_SYSTEM.colors.gray[400], textDecoration: 'none' } as React.CSSProperties}>
              이용약관
            </a>
            <a href="#" style={{ color: DESIGN_SYSTEM.colors.gray[400], textDecoration: 'none' } as React.CSSProperties}>
              개인정보처리방침
            </a>
            <a href="#" style={{ color: DESIGN_SYSTEM.colors.gray[400], textDecoration: 'none' } as React.CSSProperties}>
              이메일무단수집거부
            </a>
            <a href="#" style={{ color: DESIGN_SYSTEM.colors.gray[400], textDecoration: 'none' } as React.CSSProperties}>
              법적고지
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
