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
      { label: '工业智能化/AI化集成解决方案', href: '/services/automation-parts' },
      { label: '视觉产线解决方案', href: '/services/vision-solutions' },
      { label: 'AI 知识数字化', href: '/services/ai-solutions' },
    ],
  },
  { label: '产品中心', href: '/products' },
  { label: '关于我们', href: '/about' },
  { label: '联系我们', href: '/contact' },
];
