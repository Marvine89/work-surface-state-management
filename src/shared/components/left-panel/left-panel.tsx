import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchWorkSurfaceQuery } from "@shared/api";
import { setSurfaces } from "@states/work-surface.slice";
import { LoaderBlock } from "../loader-block/loader-block";
import { ProposalBlock } from "./proposal-block/proposal-block";
import "./left-panel.scss";

export function LeftPanel() {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useFetchWorkSurfaceQuery();

  useEffect(() => {
    if (data) dispatch(setSurfaces(data));
  }, [data, dispatch]);

  return (
    <aside className="left-panel">
      <h3 className="left-panel__title">Proposal Solution(s)</h3>
      <div className="left-panel__body">
        <LoaderBlock isLoading={isLoading} isError={isError}>
          {data?.map((workSurface, i) => (
            <ProposalBlock data={workSurface} key={i} proposalId={i + 1} />
          ))}
        </LoaderBlock>
      </div>
    </aside>
  );
}
