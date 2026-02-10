export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  specs: string[];
  image?: string;
}

export const products: Product[] = [
  {
    id: 'rotary-table',
    category: '转台',
    name: '高精度电动转台',
    description: '适用于精密定位、分度及旋转运动场景，重复定位精度高，运行平稳。',
    specs: ['重复定位精度 ≤ ±3″', '最大载重 50kg', '转速 0.1–60 rpm', '编码器反馈'],
  },
  {
    id: 'linear-guide',
    category: '导轨',
    name: '直线导轨滑块组件',
    description: '高刚性、低摩擦直线运动导轨，广泛应用于各类自动化设备。',
    specs: ['精度等级 H / P', '型号 15 – 45 系列', '双向承载', '润脂保养'],
  },
  {
    id: 'servo-motor',
    category: '电机',
    name: '交流伺服电机',
    description: '配合专用驱动器，实现高动态响应的位置、速度与力矩三环控制。',
    specs: ['功率范围 0.2–7.5 kW', '额定转速 3000 rpm', '编码器 17 位', '多种通信协议'],
  },
  {
    id: 'motion-controller',
    category: '控制器',
    name: '多轴运动控制器',
    description: '支持最多 32 轴协调运动，兼容主流 EtherCAT / Modbus 协议。',
    specs: ['最多 32 轴', 'EtherCAT / Modbus / CAN', '插补运算', 'PC 端调试软件'],
  },
  {
    id: 'ball-screw',
    category: '导轨',
    name: '精密滚珠丝杠',
    description: '将旋转运动高效转化为直线运动，导程精度高，适用于定位平台。',
    specs: ['导程精度 C3 / C5', '直径 16–63mm', '行程定制', '预压可调'],
  },
  {
    id: 'dd-motor',
    category: '电机',
    name: '直驱力矩电机',
    description: '零传动间隙，超低噪音，适用于高速高精密旋转应用场景。',
    specs: ['峰值扭矩 5–500 Nm', '空心轴结构', '水冷可选', '编码器 23 位'],
  },
];

export const productCategories = ['全部', '转台', '导轨', '电机', '控制器'];
