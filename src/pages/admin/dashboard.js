import Navigation from './components/navigation';

const Dashboard = {
  render() {
    return /* html */ `
    <div class="container-fluid admin-container flex flex-row bg-gray-100">
        ${Navigation.render()}

        <div class="px-8">
            CONTENT
        </div>
        
    </div>
        `;
  },
};
export default Dashboard;
