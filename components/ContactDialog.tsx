"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import Link from "next/link";

export default function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className={navigationMenuTriggerStyle()}>
          Contactez-moi 📧
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mes coordonnées :</DialogTitle>
          <DialogDescription>
            N&apos;hésitez pas à me contacter pour plus d&apos;informations !
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ul>
            <Link href={"tel:+33767265574"}>
              <li>📱 07 67 26 55 74</li>
            </Link>
            <Link href={"mailto:terrakiuumm@gmail.com"}>
              <li>✉️ terrakiuumm@gmail.com</li>
            </Link>
          </ul>
        </div>
        <DialogFooter>
          <Button>Ok !</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
