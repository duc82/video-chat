import { getUserProfileData } from "@/app/services/profile.service";

export default async function Profile() {
  const user = await getUserProfileData();
  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
