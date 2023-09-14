export interface TenantResponse {
    total: number,
    skipped: number
    items: TenantItemResponse[]
}

export interface TenantItemResponse {
    id: string,
    name: string,
    enabled: boolean
}
