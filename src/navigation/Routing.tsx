import { Route, Routes } from 'react-router';
import {
  AICaseStudy,
  LikertScale,
  Main,
  Tete,
  UserResearch,
  ReviewProcess
} from '@/pages';
import { ROUTES } from './routes';
import { ScrollToTop } from './ScrollToTop';

export function Routing() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={ROUTES.aiCaseStudy} element={<AICaseStudy />} />
        <Route path={ROUTES.likertScale} element={<LikertScale />} />
        <Route path={ROUTES.tete} element={<Tete />} />
        <Route path={ROUTES.userResearch} element={<UserResearch />} />
        <Route path={ROUTES.redesign} element={<ReviewProcess />} />
      </Routes>
    </>
  );
}
