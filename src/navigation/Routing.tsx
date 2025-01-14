import { Route, Routes } from 'react-router';
import { Main } from '../pages/Main/Main';

export function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<Main />}></Route>
    </Routes>
  );
}
