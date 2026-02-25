import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactInfo, ContactMessage } from '../backend';

export function useContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactInfo>({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) {
        return {
          address: 'Priyadarshini Engineering College, CRPF Road, Near CRPF Camp, Bara Ghaghra, Bhurkunda, Ranchi, Jharkhand 834010',
          email: 'contact@priyadarshini.edu.in',
          phone: '+91 12345 67890',
          googleMapsUrl: 'https://maps.google.com/?q=bhurkunda',
        };
      }
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 10,
  });
}

export function useSubmitContactMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<string, Error, { name: string; email: string; subject: string; message: string }>({
    mutationFn: async ({ name, email, subject, message }) => {
      if (!actor) throw new Error('Backend not available');
      return actor.submitContactMessage(name, email, subject, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactMessages'] });
    },
  });
}

export function useContactMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactMessage[]>({
    queryKey: ['contactMessages'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactMessages();
    },
    enabled: !!actor && !isFetching,
  });
}
