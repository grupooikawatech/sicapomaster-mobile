# APÊNDICE: INTELIGÊNCIA DE CLIENTES (CLUSTERS RFV)

## Título de Impacto para o PI:
Sistema Inteligente de Segmentação de Clientes (Clusterização RFV) para Otimização de Vendas.

---

## 1. O Problema Identificado (A Dor do Cliente)

Nosso projeto resolveu o problema de **Falta de Foco Estratégico** no processo de vendas, onde o vendedor tratava todos os clientes de forma igual.

O problema central era a ineficiência causada pela análise de longas listas de dados brutos.

## 2. A Solução (A Inclusão do Aprendizado de Máquina)

Implementamos o **Aprendizado de Máquina (ML)** utilizando a técnica de **Clusterização de Clientes (Análise RFV)**.

O objetivo foi transformar dados transacionais em **inteligência acionável**.

### 2.1. O Processo do ML e a Matriz RFV

O modelo K-Means agrupou os clientes com base na **Matriz Estratégica RFV**:

* **R (Recência):** Há quantos dias foi a última compra.
* **F (Frequência):** Quantas vezes o cliente comprou.
* **V (Valor Monetário):** Quanto o cliente gastou no total.

O algoritmo **K-Means** agrupou os clientes em **quatro perfis de compra distintos (Clusters)**.

## 3. O Resultado e o Valor Final (A Entrega ao Vendedor)

O sistema agora prioriza as ações de vendas. O valor agregado é a **Regra de Negócio** ligada ao Cluster de cada cliente:

| Perfil do Cliente (Cluster) | Exemplo de Ação Recomendada | Impacto no Negócio |
| :---: | :---: | :---: |
| **Diamante (Cluster 1)** | Focar na retenção e oferecer lançamentos exclusivos. | Aumenta a **Fidelidade** e o **Lucro**. |
| **Perdido/Risco (Cluster 3)** | Enviar campanha de **reativação** com desconto agressivo. | **Reduz o Churn** (perda de clientes). |
| **Alto Potencial (Cluster 2)** | Foco em *upsell* e *cross-sell*. | Maximiza o **Potencial de Crescimento**. |
