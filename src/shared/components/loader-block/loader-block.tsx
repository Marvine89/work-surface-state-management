import { CircularProgress } from '@mui/material';
import styles from './loader-block.module.scss';

interface LoaderBlockProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  children: React.ReactNode;
}

export function LoaderBlock(props: LoaderBlockProps) {
  if (props.isLoading) {
    return (
      <div className={styles['loader-block']} data-testid="loader-block">
        <CircularProgress color="success" size={54} />
      </div>
    );
  }

  if (props.isError) {
    return (
      <div className={styles['error-block']} data-testid="error-block">
        <p>{props.errorMessage || 'An error has occured'}</p>
      </div>
    );
  }

  return props.children;
}
