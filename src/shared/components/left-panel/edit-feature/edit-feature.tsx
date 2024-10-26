import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import "./edit-feature.scss";
import { Box } from "@mui/material";

interface ProposalBlockProps {
  open: boolean;
  onClose: () => void;
}

export function EditFeature({ open, onClose }: ProposalBlockProps) {
  const dispatch = useDispatch();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ width: 200 }}></Box>
    </Modal>
  );
}
