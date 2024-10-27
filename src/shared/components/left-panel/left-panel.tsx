import { useState } from 'react';
import { useFetchWorkSurfaceStore } from '@shared/hooks';
import { LoaderBlock } from '../loader-block/loader-block';
import { ProposalBlock } from './proposal-block/proposal-block';
import { EditFeatureModal } from './edit-feature-modal/edit-feature-modal';
import { SurfaceFeature } from '@/shared/interfaces';
import styles from './left-panel.module.scss';

export function LeftPanel() {
  const [feature, setFeature] = useState<SurfaceFeature | null>(null);
  const { isLoading, isError, data } = useFetchWorkSurfaceStore();

  return (
    <aside className={styles['left-panel']}>
      <h3 className={styles['left-panel__title']}>Proposal Solution(s)</h3>
      <div className={styles['left-panel__body']}>
        <LoaderBlock isLoading={isLoading} isError={isError}>
          {data?.map((workSurface, i) => (
            <ProposalBlock key={i} data={workSurface} proposalId={i + 1} openEditModal={setFeature} />
          ))}
        </LoaderBlock>
      </div>
      <EditFeatureModal feature={feature} onClose={() => setFeature(null)} />
    </aside>
  );
}
