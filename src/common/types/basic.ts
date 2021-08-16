type Props = {
    data?: any,
    refs?: any,
    handleUpdate?: any,
    handleDelete?: any,
    children?: any,
    url?: string, 
  }

type Company = {
  name: string,
  unique_name: string,
  website: string,
  desk_future_reservation_cutoff: string,
  desk_today_reservation_time_limit: number
}

type Building = {
  company_id: number|undefined,
  name: string|undefined,
  physical_address: string|undefined,
  gps_co_ords: string|undefined
}