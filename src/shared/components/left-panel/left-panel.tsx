import { useState } from 'react';
import { useFetchWorkSurfaceStore } from '@shared/hooks';
import { LoaderBlock } from '../loader-block/loader-block';
import { ProposalBlock } from './proposal-block/proposal-block';
import { EditPolygonModal } from './edit-polygon-modal/edit-polygon-modal';
import { SavedPolygonState } from '@/shared/interfaces';
import styles from './left-panel.module.scss';
import { SavedProposalBlock } from './saved-proposal/saved-proposal';

export function LeftPanel() {
  const [polygon, setPolygon] = useState<SavedPolygonState | null>(null);
  const { isLoading, isError, data } = useFetchWorkSurfaceStore();

  return (
    <aside className={styles['left-panel']}>
      <h3 className={styles['left-panel__title']}>Proposal Solution(s)</h3>

      <div className={styles['left-panel__body']}>
        <LoaderBlock isLoading={isLoading} isError={isError}>
          {data?.map((workSurface, i) => <ProposalBlock key={i} data={workSurface} proposalId={i + 1} />)}

          <SavedProposalBlock openEditModal={setPolygon} />
        </LoaderBlock>
      </div>
      <EditPolygonModal polygon={polygon} onClose={() => setPolygon(null)} />
    </aside>
  );
}
