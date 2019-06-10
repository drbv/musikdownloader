import {DialogInfoData} from './dialog-info-data.model';

export interface ConfirmDialogData extends DialogInfoData {
  okText?: string;
  cancelText?: string;
  okButtonColor?;
  cancelButtonColor?;
  okIcon?: string;
  cancelIcon?: string;
  disableOkColor?: boolean;
  disableCancelColor?: boolean;
}
