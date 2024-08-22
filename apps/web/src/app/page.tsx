import { ButtonInPackage } from '@repo/ui-web'

import { ButtonInApp } from '../components/button-in-app'

export default function Home() {
  return (
    <div className="p-4 gap-4 w-md flex justify-around">
      <ButtonInApp />
      <ButtonInPackage />
    </div>
  );
}
