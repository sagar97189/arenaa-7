import React from "react";
import { X, Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
}

const EnquiryModal = ({ isOpen, onClose, courseName }: EnquiryModalProps) => {
  const phoneNumber = "+919213404924";
  const email = "info@arenafaridabad.in";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;
  const address = "SCO-7, Ground Floor, Sector-7, Faridabad, Haryana 121006";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white rounded-xl">
        <DialogHeader className="bg-arena-blue text-white p-6">
          <DialogTitle className="text-2xl font-bold text-center">
            {courseName ? `Enquire about ${courseName}` : 'Contact Us'}
          </DialogTitle>
          <p className="text-center text-white/80 mt-2">
            We're here to help you start your creative journey
          </p>
        </DialogHeader>
        
        <div className="p-6">
          <EnquiryForm 
            courseName={courseName} 
            buttonType="both" 
          />

          {/* Contact Information */}
          <div className="space-y-4 border-t border-gray-200 pt-6 mt-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-arena-orange mt-1" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <a href={`tel:${phoneNumber}`} className="text-arena-blue hover:underline">
                  {phoneNumber}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-arena-orange mt-1" />
              <div>
                <h4 className="font-medium">Email</h4>
                <a href={`mailto:${email}`} className="text-arena-blue hover:underline">
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-arena-orange mt-1" />
              <div>
                <h4 className="font-medium">Address</h4>
                <a 
                  href="https://maps.google.com/?q=Arena+Animation+Sector+7+Faridabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-arena-blue"
                >
                  {address}
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryModal; 