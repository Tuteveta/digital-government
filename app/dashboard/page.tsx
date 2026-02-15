'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PortalHeader, PortalFooter } from '@/components/PortalLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Settings, 
  LogOut, 
  Bell,
  TrendingUp,
  TrendingDown,
  Minus,
  Activity,
  Users,
  Server,
  Shield,
  AlertCircle,
  CheckCircle,
  Clock,
  FileText,
  BarChart3,
} from 'lucide-react';
import { User as UserType, getUserDashboardData, getUserNotifications, roleInfo } from '@/lib/mockAuth';

export default function DashboardPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userStr = localStorage.getItem('currentUser');

    if (!isAuthenticated || !userStr) {
      router.push('/login');
      return;
    }

    const user = JSON.parse(userStr);
    setCurrentUser(user);
    setDashboardData(getUserDashboardData(user.role));
    setNotifications(getUserNotifications(user.id));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    router.push('/login');
  };

  if (!currentUser || !dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const roleConfig = roleInfo[currentUser.role];
  const unreadCount = notifications.filter(n => !n.read).length;

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader />
      
      <main className="flex-1">
        {/* Dashboard Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back, {currentUser.fullName}
                </h1>
                <p className="text-gray-600 mt-1">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${roleConfig.color}-100 text-${roleConfig.color}-800`}>
                    {roleConfig.name}
                  </span>
                  <span className="ml-3">{currentUser.department}</span>
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Bell className="w-6 h-6 text-gray-600" />
                    {unreadCount > 0 && (
                      <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                  
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="p-4 text-center text-gray-500">
                            No notifications
                          </div>
                        ) : (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                                !notification.read ? 'bg-blue-50' : ''
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <Bell className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-gray-900 text-sm">
                                    {notification.title}
                                  </p>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/settings')}
                  className="gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="gap-2 text-red-600 hover:text-red-700"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardData.stats.map((stat: any, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {getTrendIcon(stat.trend)}
                        <span className={`text-sm ${
                          stat.trend === 'up' ? 'text-green-600' : 
                          stat.trend === 'down' ? 'text-red-600' : 
                          'text-gray-500'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activities / Role-specific content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  {currentUser.role === 'super' && 'Recent Activities'}
                  {currentUser.role === 'admin' && 'Pending Approvals'}
                  {currentUser.role === 'support' && 'Recent Tickets'}
                  {currentUser.role === 'dto' && 'Active Projects'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentUser.role === 'super' && dashboardData.recentActivities && (
                    dashboardData.recentActivities.map((activity: any, index: number) => (
                      <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            by {activity.user} • {activity.time}
                          </p>
                        </div>
                      </div>
                    ))
                  )}

                  {currentUser.role === 'admin' && dashboardData.pendingApprovals && (
                    dashboardData.pendingApprovals.map((approval: any) => (
                      <div key={approval.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{approval.type}</p>
                          <p className="text-xs text-gray-600 mt-1">{approval.name}</p>
                          <p className="text-xs text-gray-500 mt-1">{approval.submitted}</p>
                        </div>
                        <Button size="sm" className="text-xs">Review</Button>
                      </div>
                    ))
                  )}

                  {currentUser.role === 'support' && dashboardData.recentTickets && (
                    dashboardData.recentTickets.map((ticket: any) => (
                      <div key={ticket.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">{ticket.id}</span>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              ticket.priority === 'high' ? 'bg-red-100 text-red-700' :
                              ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {ticket.priority}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{ticket.subject}</p>
                          <p className="text-xs text-gray-500 mt-1">{ticket.time}</p>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs">
                          {ticket.status === 'open' ? 'Take' : 'View'}
                        </Button>
                      </div>
                    ))
                  )}

                  {currentUser.role === 'dto' && dashboardData.activeProjects && (
                    dashboardData.activeProjects.map((project: any) => (
                      <div key={project.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{project.name}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            project.status === 'on_track' ? 'bg-green-100 text-green-700' :
                            project.status === 'ahead' ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {project.status === 'on_track' ? 'On Track' :
                             project.status === 'ahead' ? 'Ahead' : 'At Risk'}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>{project.progress}% Complete</span>
                          <span>Due: {project.deadline}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* System Health / Additional Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  {currentUser.role === 'super' && 'System Health'}
                  {currentUser.role === 'admin' && 'Quick Actions'}
                  {currentUser.role === 'support' && 'Tickets by Category'}
                  {currentUser.role === 'dto' && 'Upcoming Milestones'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentUser.role === 'super' && dashboardData.systemHealth && (
                  <div className="space-y-4">
                    {Object.entries(dashboardData.systemHealth).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="capitalize text-gray-600">{key}</span>
                          <span className="font-medium">{value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              (value as number) > 80 ? 'bg-red-500' :
                              (value as number) > 60 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentUser.role === 'admin' && (
                  <div className="space-y-3">
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <Users className="w-4 h-4" />
                      Manage Users
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <FileText className="w-4 h-4" />
                      View Reports
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <Server className="w-4 h-4" />
                      Service Dashboard
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <Settings className="w-4 h-4" />
                      System Settings
                    </Button>
                  </div>
                )}

                {currentUser.role === 'support' && dashboardData.ticketsByCategory && (
                  <div className="space-y-3">
                    {Object.entries(dashboardData.ticketsByCategory).map(([category, count]) => (
                      <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">{category}</span>
                        <span className="text-lg font-bold text-primary">{count as number}</span>
                      </div>
                    ))}
                  </div>
                )}

                {currentUser.role === 'dto' && dashboardData.upcomingMilestones && (
                  <div className="space-y-4">
                    {dashboardData.upcomingMilestones.map((milestone: any, index: number) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{milestone.milestone}</p>
                          <p className="text-xs text-gray-600 mt-1">{milestone.project}</p>
                          <p className="text-xs text-gray-500 mt-1">{milestone.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <PortalFooter />
    </div>
  );
}
