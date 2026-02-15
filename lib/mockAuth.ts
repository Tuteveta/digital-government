// Mock User Authentication Data

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  fullName: string;
  role: 'super' | 'admin' | 'support' | 'dto';
  department: string;
  avatar: string;
  phone: string;
  lastLogin: string;
  permissions: string[];
  status: 'active' | 'inactive';
  createdAt: string;
}

export const mockUsers: User[] = [
  {
    id: 'user-001',
    username: 'superadmin',
    password: 'super123', // In production, this would be hashed
    email: 'superadmin@digitalgov.gov.pg',
    fullName: 'John Kila',
    role: 'super',
    department: 'System Administration',
    avatar: '/avatars/superadmin.jpg',
    phone: '+675 7234 5678',
    lastLogin: '2026-02-14T08:30:00',
    status: 'active',
    createdAt: '2024-01-01T00:00:00',
    permissions: [
      'system.full_access',
      'users.create',
      'users.edit',
      'users.delete',
      'users.view',
      'departments.manage',
      'services.manage',
      'infrastructure.manage',
      'security.manage',
      'reports.view_all',
      'settings.manage',
      'audit.view',
    ]
  },
  {
    id: 'user-002',
    username: 'admin',
    password: 'admin123',
    email: 'admin@digitalgov.gov.pg',
    fullName: 'Sarah Tau',
    role: 'admin',
    department: 'Digital Services',
    avatar: '/avatars/admin.jpg',
    phone: '+675 7234 5679',
    lastLogin: '2026-02-13T16:45:00',
    status: 'active',
    createdAt: '2024-02-15T00:00:00',
    permissions: [
      'users.create',
      'users.edit',
      'users.view',
      'departments.view',
      'services.manage',
      'services.view',
      'infrastructure.view',
      'reports.view_department',
      'settings.view',
    ]
  },
  {
    id: 'user-003',
    username: 'support',
    password: 'support123',
    email: 'support@digitalgov.gov.pg',
    fullName: 'Michael Bari',
    role: 'support',
    department: 'Technical Support',
    avatar: '/avatars/support.jpg',
    phone: '+675 7234 5680',
    lastLogin: '2026-02-14T09:15:00',
    status: 'active',
    createdAt: '2024-03-20T00:00:00',
    permissions: [
      'tickets.create',
      'tickets.edit',
      'tickets.view',
      'tickets.assign',
      'users.view',
      'services.view',
      'knowledge_base.edit',
      'reports.view_support',
    ]
  },
  {
    id: 'user-004',
    username: 'dto',
    password: 'dto123',
    email: 'dto.officer@digitalgov.gov.pg',
    fullName: 'Grace Moi',
    role: 'dto',
    department: 'Digital Transformation Office',
    avatar: '/avatars/dto.jpg',
    phone: '+675 7234 5681',
    lastLogin: '2026-02-14T07:20:00',
    status: 'active',
    createdAt: '2024-04-10T00:00:00',
    permissions: [
      'projects.create',
      'projects.edit',
      'projects.view',
      'departments.view',
      'services.view',
      'infrastructure.view',
      'standards.edit',
      'compliance.view',
      'reports.view_dto',
    ]
  },
];

// Mock dashboard data for each role
export const mockDashboardData = {
  super: {
    stats: [
      { label: 'Total Users', value: '1,234', change: '+12%', trend: 'up' },
      { label: 'Active Services', value: '45', change: '+3', trend: 'up' },
      { label: 'System Uptime', value: '99.9%', change: '0%', trend: 'stable' },
      { label: 'Security Alerts', value: '3', change: '-5', trend: 'down' },
    ],
    recentActivities: [
      { action: 'New user created', user: 'admin', time: '10 minutes ago', type: 'user' },
      { action: 'Service deployed', user: 'dto', time: '1 hour ago', type: 'service' },
      { action: 'Security patch applied', user: 'superadmin', time: '2 hours ago', type: 'security' },
      { action: 'Database backup completed', user: 'system', time: '3 hours ago', type: 'system' },
    ],
    systemHealth: {
      cpu: 45,
      memory: 62,
      disk: 38,
      network: 78,
    },
  },
  admin: {
    stats: [
      { label: 'Active Users', value: '892', change: '+8%', trend: 'up' },
      { label: 'Services Managed', value: '25', change: '+2', trend: 'up' },
      { label: 'Pending Requests', value: '12', change: '-3', trend: 'down' },
      { label: 'Completed Tasks', value: '156', change: '+15', trend: 'up' },
    ],
    recentActivities: [
      { action: 'User account approved', user: 'admin', time: '30 minutes ago', type: 'user' },
      { action: 'Service configuration updated', user: 'admin', time: '2 hours ago', type: 'service' },
      { action: 'Department report generated', user: 'admin', time: '4 hours ago', type: 'report' },
    ],
    pendingApprovals: [
      { id: 1, type: 'User Registration', name: 'James Kila', submitted: '2 hours ago' },
      { id: 2, type: 'Service Request', name: 'Health Department', submitted: '5 hours ago' },
      { id: 3, type: 'Access Request', name: 'Finance Ministry', submitted: '1 day ago' },
    ],
  },
  support: {
    stats: [
      { label: 'Open Tickets', value: '23', change: '+5', trend: 'up' },
      { label: 'Resolved Today', value: '18', change: '+6', trend: 'up' },
      { label: 'Avg Response Time', value: '15 min', change: '-3 min', trend: 'down' },
      { label: 'Satisfaction Rate', value: '94%', change: '+2%', trend: 'up' },
    ],
    recentTickets: [
      { id: 'TKT-1001', subject: 'Email access issue', priority: 'high', status: 'open', time: '5 min ago' },
      { id: 'TKT-1002', subject: 'Password reset request', priority: 'medium', status: 'in_progress', time: '15 min ago' },
      { id: 'TKT-1003', subject: 'Application not loading', priority: 'high', status: 'open', time: '30 min ago' },
      { id: 'TKT-1004', subject: 'VPN connection problem', priority: 'low', status: 'resolved', time: '1 hour ago' },
    ],
    ticketsByCategory: {
      'Email Issues': 8,
      'Access Problems': 6,
      'Application Errors': 5,
      'Network Issues': 4,
    },
  },
  dto: {
    stats: [
      { label: 'Active Projects', value: '12', change: '+2', trend: 'up' },
      { label: 'Departments Onboarded', value: '34', change: '+3', trend: 'up' },
      { label: 'Compliance Rate', value: '87%', change: '+5%', trend: 'up' },
      { label: 'Training Sessions', value: '8', change: '+1', trend: 'up' },
    ],
    activeProjects: [
      { id: 1, name: 'Digital Identity System', progress: 75, status: 'on_track', deadline: '2026-03-15' },
      { id: 2, name: 'E-Procurement Platform', progress: 45, status: 'on_track', deadline: '2026-04-30' },
      { id: 3, name: 'Cloud Migration Phase 2', progress: 90, status: 'ahead', deadline: '2026-02-28' },
      { id: 4, name: 'Cybersecurity Training', progress: 30, status: 'at_risk', deadline: '2026-03-20' },
    ],
    upcomingMilestones: [
      { project: 'Digital Identity System', milestone: 'User Acceptance Testing', date: '2026-02-20' },
      { project: 'Cloud Migration Phase 2', milestone: 'Final Deployment', date: '2026-02-25' },
      { project: 'E-Procurement Platform', milestone: 'Stakeholder Review', date: '2026-03-05' },
    ],
  },
};

// Mock notifications for each user
export const mockNotifications = {
  'user-001': [
    { id: 1, title: 'System Update Required', message: 'Security patch available for deployment', time: '2 hours ago', read: false, type: 'security' },
    { id: 2, title: 'New User Registration', message: '3 new users pending approval', time: '4 hours ago', read: false, type: 'user' },
    { id: 3, title: 'Backup Completed', message: 'Daily database backup successful', time: '6 hours ago', read: true, type: 'system' },
  ],
  'user-002': [
    { id: 1, title: 'Approval Required', message: 'Health Department service request needs review', time: '1 hour ago', read: false, type: 'approval' },
    { id: 2, title: 'Report Generated', message: 'Monthly service usage report is ready', time: '3 hours ago', read: false, type: 'report' },
    { id: 3, title: 'User Account Activated', message: 'Finance Ministry account now active', time: '5 hours ago', read: true, type: 'user' },
  ],
  'user-003': [
    { id: 1, title: 'High Priority Ticket', message: 'TKT-1001: Email access issue requires attention', time: '5 min ago', read: false, type: 'ticket' },
    { id: 2, title: 'Ticket Assigned', message: 'TKT-1003 assigned to you', time: '30 min ago', read: false, type: 'ticket' },
    { id: 3, title: 'SLA Warning', message: 'TKT-998 approaching SLA deadline', time: '1 hour ago', read: true, type: 'alert' },
  ],
  'user-004': [
    { id: 1, title: 'Project Milestone', message: 'Cloud Migration Phase 2 reached 90%', time: '1 hour ago', read: false, type: 'project' },
    { id: 2, title: 'Training Session', message: 'Cybersecurity workshop scheduled for next week', time: '2 hours ago', read: false, type: 'training' },
    { id: 3, title: 'Compliance Report', message: 'Q1 compliance report ready for review', time: '4 hours ago', read: true, type: 'compliance' },
  ],
};

// Authentication helper functions
export const authenticateUser = (username: string, password: string): User | null => {
  const user = mockUsers.find(
    (u) => u.username === username && u.password === password && u.status === 'active'
  );
  return user || null;
};

export const getUserById = (id: string): User | null => {
  return mockUsers.find((u) => u.id === id) || null;
};

export const getUserDashboardData = (role: string) => {
  return mockDashboardData[role as keyof typeof mockDashboardData] || mockDashboardData.dto;
};

export const getUserNotifications = (userId: string) => {
  return mockNotifications[userId as keyof typeof mockNotifications] || [];
};

// Role display names and descriptions
export const roleInfo = {
  super: {
    name: 'Super Administrator',
    description: 'Full system access with all permissions',
    color: 'red',
  },
  admin: {
    name: 'Administrator',
    description: 'Manage users, services, and departments',
    color: 'blue',
  },
  support: {
    name: 'Support Officer',
    description: 'Handle user tickets and technical support',
    color: 'green',
  },
  dto: {
    name: 'Digital Transformation Officer',
    description: 'Manage digital transformation projects and initiatives',
    color: 'purple',
  },
};
