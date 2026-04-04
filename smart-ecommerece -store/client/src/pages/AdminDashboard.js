import { BarChart3, Users, Package, DollarSign, Settings, TrendingUp } from 'lucide-react'

const stats = [
  { name: 'Total Orders', value: '1,234', change: '+12%', icon: Package, color: 'from-blue-500' },
  { name: 'Total Revenue', value: '$45,678', change: '+8.5%', icon: DollarSign, color: 'from-emerald-500' },
  { name: 'New Users', value: '567', change: '+23%', icon: Users, color: 'from-purple-500' },
  { name: 'Avg Order Value', value: '$89.34', change: '+4.2%', icon: TrendingUp, color: 'from-orange-500' },
]

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Welcome back! Here's what's happening with your store today.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <Settings className="inline-block mr-2 h-5 w-5" />
              Store Settings
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-8 mb-16">
        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <div key={stat.name} className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600">
            <div className="flex items-center">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} to-indigo-500 shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${stat.change.startsWith('+') ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200' : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'}`}>
                {stat.change}
              </span>
              <span className="ml-2 text-gray-500 dark:text-gray-400">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Revenue</h3>
            <select className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 6 months</option>
            </select>
          </div>
          <div className="h-80 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl flex items-center justify-center">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-40" />
              <p className="text-lg">Revenue chart will be here</p>
              <p className="text-sm">Real-time analytics coming soon</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Package className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm opacity-90">Pending Orders</p>
                <p className="text-3xl font-bold">89</p>
              </div>
            </div>
            <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-4 rounded-xl font-semibold transition-all">
              View Orders
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm opacity-90">Low Stock</p>
                <p className="text-3xl font-bold">23</p>
              </div>
            </div>
            <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-4 rounded-xl font-semibold transition-all">
              Manage Inventory
            </button>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Order ID</th>
                <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Customer</th>
                <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Status</th>
                <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Total</th>
                <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { id: '#12345', customer: 'John Doe', status: 'Shipped', total: '$456.78', date: '2024-01-15' },
                { id: '#12344', customer: 'Jane Smith', status: 'Pending', total: '$234.99', date: '2024-01-14' },
                { id: '#12343', customer: 'Bob Johnson', status: 'Delivered', total: '$789.00', date: '2024-01-13' },
              ].map((order, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-8 py-6 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{order.id}</td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-900 dark:text-white">{order.customer}</td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Shipped' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200' :
                      order.status === 'Delivered' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white">${order.total}</td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

