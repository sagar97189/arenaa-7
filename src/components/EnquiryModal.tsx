import React from "react";
import { X, Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
          {/* Quick Contact Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-lg hover:bg-[#128C7E] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 border-t border-gray-200 pt-6">
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