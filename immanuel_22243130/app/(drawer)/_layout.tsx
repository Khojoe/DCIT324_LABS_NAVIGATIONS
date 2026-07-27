import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Dashboard',
          title: 'Campus Connect',
        }}
      />
      <Drawer.Screen
        name="announcements"
        options={{
          drawerLabel: 'Announcements',
          title: 'Announcements',
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: 'About',
          title: 'About Campus Connect',
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          drawerLabel: 'Help & Support',
          title: 'Help & Support',
        }}
      />
    </Drawer>
  );
}
