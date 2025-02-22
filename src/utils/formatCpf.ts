export function formatCpf(value: any) {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length === 11) {
        const cpfFormatted = numericValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        return cpfFormatted;
    }
    return value;
   
};

