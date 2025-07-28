import React, { useState } from 'react';
import { X, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon, Text } from '../atoms';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, email }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  };

  const openEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-2xl border border-gray-700 p-6 w-full max-w-md shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <Icon icon={Mail} size={24} color="red" />
                  </div>
                  <Text variant="h3" color="white">
                    Contacto
                  </Text>
                </div>
                <Button
                  variant="ghost"
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800 rounded-lg"
                >
                  <Icon icon={X} size={20} color="gray" />
                </Button>
              </div>

              {/* Email Display */}
              <div className="mb-6">
                <Text variant="p" color="muted" className="mb-2">
                  Mi dirección de correo electrónico:
                </Text>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <Text variant="p" color="white" className="font-mono text-center">
                    {email}
                  </Text>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={openEmailClient}
                  motionProps={{
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 }
                  }}
                >
                  <Icon icon={ExternalLink} size={16} />
                  <span>Abrir en cliente de correo</span>
                </Button>

                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={copyToClipboard}
                  motionProps={{
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 }
                  }}
                >
                  <Icon icon={copied ? Check : Copy} size={16} />
                  <span>{copied ? 'Copiado!' : 'Copiar dirección'}</span>
                </Button>
              </div>

              <Text variant="small" color="muted" align="center" className="mt-4">
                También puedes escribirme directamente a esta dirección
              </Text>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
