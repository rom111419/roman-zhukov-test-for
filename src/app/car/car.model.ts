export interface CarI {
  name: string
  plate: string
  make: string
  model: string
  year: string
  device_type: string
  device_serial: string
  tracker_type: string
  vin: string
  driver: string
  current_odometer: number
  tank_capacity: number
  labels_uuid: string[]
}

export type CarUuid = string;

export type CarCreateReq = CarI
export interface CarCreateReqRes extends CarI {uuid: CarUuid}

export type CarReadReq = CarUuid;
export interface CarReadReqRes extends CarI {uuid: CarUuid}

export interface CarUpdateReq extends CarI {uuid: CarUuid}
export interface CarUpdateReqRes extends CarI {uuid: CarUuid}

export type CarDelReq = CarI
export type CarDelReqRes = CarI
