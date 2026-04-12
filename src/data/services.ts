export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
  color: string;
}

export const services: Service[] = [
  {
    id: 'automation-parts',
    icon: '⚙️',
    title: '工业AI系统驱动的智能运动控制与集成解决方案',
    subtitle: '智能控制 · 精密传动',
    description:
      '提供高精度直线传动系统、旋转工作台、直驱电机及控制系统，融合智能化AI集成，涵盖从单件采购到整体运动解决方案的全链路服务。',
    features: [
      '高精度转台 / 旋转平台',
      '直线导轨 / 滑块组件',
      '电气系统智能控制与集成解决方案',
      '工业AI控制系统及智能优化方案',
      '客制化AI集成与系统级解决方案',
    ],
    href: '/services/automation-parts',
    color: 'blue',
  },
  {
    id: 'vision-solutions',
    icon: '👁️',
    title: '视觉产线解决方案',
    subtitle: '智能检测 · 精准识别',
    description:
      '结合工业相机、光源及深度学习算法，为客户提供缺陷检测、尺寸测量、定位引导等完整视觉系统集成服务。',
    features: [
      '产品外观缺陷自动检测',
      '尺寸与轮廓精密测量',
      '机器人视觉引导定位',
      '二维码 / 字符识别（OCR）',
      '全线视觉方案集成与部署',
    ],
    href: '/services/vision-solutions',
    color: 'teal',
  },
  {
    id: 'ai-solutions',
    icon: '🧠',
    title: 'AI 知识数字化',
    subtitle: '经验沉淀 · 智能传承',
    description:
      '将企业多年积累的工艺参数、专家经验与历史数据转化为可运行的 AI 模型，实现知识资产的数字化沉淀与持续优化。',
    features: [
      '工艺参数优化模型构建',
      '历史数据挖掘与分析',
      '专家经验知识图谱',
      '预测性维护模型开发',
      '持续学习与模型迭代',
    ],
    href: '/services/ai-solutions',
    color: 'purple',
  },
];

export const serviceColorMap: Record<string, Record<string, string>> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    btn: 'bg-primary-700 hover:bg-primary-800',
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    icon: 'text-teal-600',
    badge: 'bg-teal-100 text-teal-700',
    btn: 'bg-teal-700 hover:bg-teal-800',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-700',
    btn: 'bg-purple-700 hover:bg-purple-800',
  },
};
