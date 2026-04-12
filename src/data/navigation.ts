export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: '首页', href: '/' },
  {
    label: '业务领域',
    href: '/services',
    children: [
      { label: '工业AI系统驱动的智能运动控制与集成解决方案', href: '/services/automation-parts' },
      { label: '视觉产线解决方案', href: '/services/vision-solutions' },
      { label: 'AI 知识数字化', href: '/services/ai-solutions' },
    ],
  },
  {
    label: '产品中心',
    href: '/products',
    children: [
      { label: '⚙️ 智能运动控制', href: '/products#motion' },
      { label: '👁️ 高精度视觉检测', href: '/products#vision' },
      { label: '🧠 AI系统集成', href: '/products#ai' },
    ],
  },
  { label: '关于我们', href: '/about' },
  { label: '联系我们', href: '/contact' },
];
