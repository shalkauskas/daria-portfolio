import { Route, Routes } from 'react-router';
import { LikertScale, Main, UserResearch } from '@/pages';
import { ROUTES } from './routes';

export function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<Main />} />
      <Route path={ROUTES.likertScale} element={<LikertScale />} />
      <Route path={ROUTES.userResearch} element={<UserResearch />} />
    </Routes>
  );
}
