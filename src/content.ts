export type SystemId = 'battery' | 'drive'
export const systems = {
  battery: {
    index: '01', label: 'Energy core', category: 'Energy storage', title: 'Energy,\nheld low.',
    short: 'Inspect the energy core',
    description: 'A flat, high-voltage pack sits low under the floor, feeding the motor on demand and keeping weight close to the road.',
    benefit: 'A low centre of mass keeps the car planted and the cabin open.',
    image: '/media/battery-blue.png', anchor: { x: 64, y: 72 },
    points: [
      { label: 'Cell modules', text: 'Grouped cells store the energy the car draws on.', x: 31, y: 42 },
      { label: 'Power cabling', text: 'Orange cabling marks the high-voltage path to the drive unit.', x: 27, y: 55 },
      { label: 'Pack shell', text: 'A rigid housing holds the modules and shields them from the road.', x: 49, y: 49 },
    ],
  },
  drive: {
    index: '02', label: 'Propulsion', category: 'Power delivery', title: 'Charge in.\nMotion out.',
    short: 'Inspect the drive unit',
    description: 'A motor turns stored energy into rotation, and a reduction gear carries it on to the wheels.',
    benefit: 'Precise torque control gives instant, linear response.',
    image: '/media/drive-blue.png', anchor: { x: 25, y: 48 },
    points: [
      { label: 'Stator', text: 'Fixed copper windings create a rotating magnetic field.', x: 32, y: 46 },
      { label: 'Rotor', text: 'The rotor spins within the stator field and turns the shaft.', x: 24, y: 49 },
      { label: 'Reduction gear', text: 'Gearing slows rotation and multiplies torque at the wheels.', x: 48, y: 51 },
    ],
  },
} as const
export const systemIds: SystemId[] = ['battery', 'drive']
export type HotspotId = SystemId | 'wheels' | 'paint'
export const hotspots: { id: HotspotId; index: string; label: string; anchor: { x: number; y: number }; target: SystemId | null }[] = [
  ...(['battery', 'drive'] as const).map(id => ({ id, index: systems[id].index, label: systems[id].label, anchor: systems[id].anchor, target: id })),
  { id: 'paint', index: '03', label: 'Finish', anchor: { x: 55, y: 51 }, target: null },
  { id: 'wheels', index: '04', label: 'Wheelset', anchor: { x: 48, y: 71 }, target: null },
]
