import styles from './property-tex.module.scss';

interface PropertyTextProps {
  title: string;
  value?: string;
}

export function PropertyText(props: PropertyTextProps) {
  return (
    <div className={styles['properties']}>
      <span className={styles['title']}>{props.title} :</span>
      <span className={styles['value']}>{props.value || '-'}</span>
    </div>
  );
}
