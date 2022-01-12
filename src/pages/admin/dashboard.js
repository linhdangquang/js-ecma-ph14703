import Navigation from './components/navigation';
import AdminHeader from './components/header';

const Dashboard = {
  render() {
    return /* html */ `
      <div class="container-fluid admin-container flex flex-row bg-gray-100">
        ${Navigation.render()}
          <div class="ml-4 rounded-l-2xl relative bg-white w-full">
          ${AdminHeader.render('dashboard')}
          </div
      </div>
      
      `;
  },
};
export default Dashboard;
