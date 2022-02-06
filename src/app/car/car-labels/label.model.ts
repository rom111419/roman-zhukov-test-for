export interface Label {
  uuid?: string
  label: string
}

export type LabelUuid = string;

export type LabelCreateReq = Label
export interface LabelCreateReqRes extends Label {uuid: LabelUuid}

export type LabelReadReq = LabelUuid;
export interface LabelReadReqRes extends Label {uuid: LabelUuid}

export interface LabelUpdateReq extends Label {uuid: LabelUuid}
export interface LabelUpdateReqRes extends Label {uuid: LabelUuid}

export type LabelDelReq = Label
export type LabelDelReqRes = Label
