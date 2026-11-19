# Avaliação DevOps 18/11

## Equipe:
- José Carlos Pereira Neto
- Lucas Paulino Gomes
- Thierry Antonello Pengo

1. Clone o repositório:

```bash
git clone https://github.com/aspiringluke/avaliacao-devops_1811.git
```

2. Crie a infraestrutura

```bash
pwd # .../avaliacao/
cd iac
tofu init
tofu apply # Digite "yes" quando pedido
```

3. Atualize os endereços de IP

No arquivo `ansible/inventory.ini`, troque o endereço de VM1 pelo de "0" do output do tofu, e o de VM2 pelo de "1"
No arquivo `app/index.html`, troque a constante `url` pelo endereço de VM2

4. Execute o ansible

```bash
pwd # .../avaliacao/
cd ansible
ansible-playbook playbook.yml -i inventory.ini --private-key ~/.ssh/devops_lab
```