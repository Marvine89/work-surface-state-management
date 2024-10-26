import { useFetchWorkSurfaceQuery } from "../../api";
import { LoaderBlock } from "../loader-block/loader-block";
import { ProposalBlock } from "./proposal-block/proposal-block";
import "./left-panel.scss";

export function LeftPanel() {
  const { isLoading, isError, data } = useFetchWorkSurfaceQuery();

  return (
    <aside className="left-panel">
      <h3 className="left-panel__title">Proposal Solution(s)</h3>
      <div className="left-panel__body">
        <LoaderBlock isLoading={isLoading} isError={isError}>
          {data?.map((workSurface, i) => (
            <ProposalBlock data={workSurface} key={i} index={i + 1} />
          ))}
        </LoaderBlock>
      </div>
    </aside>
  );
}
