import { CircularProgress } from "@mui/material";
import "./loader-block.scss";

interface LoaderBlockProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  children: React.ReactNode;
}

export function LoaderBlock(props: LoaderBlockProps) {
  if (props.isLoading) {
    return (
      <div className="loader-block">
        <CircularProgress color="success" size={54}/>
      </div>
    );
  }

  if (props.isError) {
    return (
      <div className="error-block">
        <p>{props.errorMessage || "An error has occured"}</p>
      </div>
    );
  }

  return props.children;
}
