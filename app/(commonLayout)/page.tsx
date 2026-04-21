import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.service";

export default async function Home() {
  const { data } = await userService.getSession();

  return (
    <div>
      <Button variant="outline">Click Me</Button>
    </div>
  );
}
