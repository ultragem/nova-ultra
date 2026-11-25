export type AppearanceMode = 'paint' | 'wheels'
export const baseExterior = '/media/exterior-polished.png'
export type AppearanceOption = { id: string; label: string; image: string; color?: string }
export const appearanceOptions: Record<AppearanceMode, AppearanceOption[]> = {
  paint: [
    { id: 'silver', label: 'Ultra Silver', color: '#c9cfd2', image: baseExterior },
    { id: 'electric', label: 'Volt Green', color: '#edff39', image: '/media/config/electric-green.png' },
    { id: 'lime', label: 'Acid Lime', color: '#9fdc32', image: '/media/config/lime-green.png' },
    { id: 'sky', label: 'Glacier Blue', color: '#708fa2', image: '/media/config/sky-blue.png' },
    { id: 'graphite', label: 'Obsidian', color: '#30363c', image: '/media/config/graphite.png' },
  ],
  wheels: [
    { id: 'original', label: 'Turbine', image: baseExterior },
    { id: 'aero', label: 'Slipstream', image: '/media/config/wheels-aero.png' },
    { id: 'forged', label: 'Apex Forged', image: '/media/config/wheels-forged.png' },
  ],
}

export function canUseHotspot(active: AppearanceMode | null, id: string, closing: boolean) {
  return !closing && (!active || active === id)
}
