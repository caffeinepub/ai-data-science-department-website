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
          email: 'afnantahibkondalam@gmail.com',
          github: 'https://github.com/Afnan-Tahib/FUTURE_DS_01',
          linkedin: 'https://www.linkedin.com/in/afnan-tahib-kundalam-7a3881384',
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

  return useMutation<string, Error, { name: string; email: string; message: string }>({
    mutationFn: async ({ name, email, message }) => {
      if (!actor) throw new Error('Backend not available');
      return actor.submitContactMessage(name, email, message);
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
