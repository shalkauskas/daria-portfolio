import { Route, Routes } from 'react-router';
import { LikertScale, Main, Tete, UserResearch, ReviewProcess } from '@/pages';
import { ROUTES } from './routes';

export function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<Main />} />
      <Route path={ROUTES.likertScale} element={<LikertScale />} />
      <Route path={ROUTES.tete} element={<Tete />} />
      <Route path={ROUTES.userResearch} element={<UserResearch />} />
      <Route path={ROUTES.redesign} element={<ReviewProcess />} />
    </Routes>
  );
}
