-- AddForeignKey
ALTER TABLE "Sem1" ADD CONSTRAINT "Sem1_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsAcademic"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sem2" ADD CONSTRAINT "Sem2_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsAcademic"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sem3" ADD CONSTRAINT "Sem3_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsAcademic"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sem4" ADD CONSTRAINT "Sem4_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsAcademic"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sem5" ADD CONSTRAINT "Sem5_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsAcademic"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sem6" ADD CONSTRAINT "Sem6_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsAcademic"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
