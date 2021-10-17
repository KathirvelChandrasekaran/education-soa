-- AddForeignKey
ALTER TABLE "ParticularsEducaton" ADD CONSTRAINT "ParticularsEducaton_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsAcademic"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
