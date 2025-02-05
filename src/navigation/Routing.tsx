import { Route, Routes } from 'react-router';
import { LikertScale, Main } from '@/pages';
import { ROUTES } from './routes';

export function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<Main />}></Route>
      <Route path={ROUTES.likertScale} element={<LikertScale />}></Route>
    </Routes>
  );
}
