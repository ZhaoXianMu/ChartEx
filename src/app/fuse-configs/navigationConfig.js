import utilService from 'app/main/components/common/utilService'


const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'home-component',
        title: 'Home',
        type: 'item',
        image: 'inicio',
        url: '/home'
      }
    ]
  }
]

export default navigationConfig
