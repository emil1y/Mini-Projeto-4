export interface Food {
  id: string;
  nome: string;
  caloria: number;
  quantidade_padrao: string;
  proteinas: string;
  carboidratos: string;
  lipidios: string;
  alergenos?: string;
}
