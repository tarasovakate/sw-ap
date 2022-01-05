import { lazyLoad } from 'utils/loadable';

export const PeoplePage = lazyLoad(
  () => import('./index'),
  module => module.PeoplePage,
);
