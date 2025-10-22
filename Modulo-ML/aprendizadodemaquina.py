# =================================================================
# PASSO 1: CARREGAR DADOS E PREPARAR O AMBIENTE
# =================================================================

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns

# 1.1 Carregue o arquivo Excel ou CSV que contém sua Tabela RFV
# Substitua 'sua_tabela_rfv.xlsx' pelo nome do seu arquivo.
try:
    # Use o argumento sheet_name para indicar a aba "Machine Learning"
    rfv_df = pd.read_excel('Tabela_rfv.xlsx', sheet_name='Machine Learning')
except FileNotFoundError:
    print("ERRO: Arquivo não encontrado. Verifique o nome do arquivo!")
    exit()
    
# 1.2 Selecionar apenas as colunas de métricas para o ML
# O K-Means trabalha apenas com dados numéricos.
dados_ml = rfv_df[['RECENCIA', 'FREQUENCIA', 'VALOR_MONETARIO']]


# =================================================================
# PASSO 2: PRÉ-PROCESSAMENTO (ESCALAMENTO)
# =================================================================

# 2.1 Padronizar os dados (obrigatório para K-Means!)
# Isso garante que Recência, Frequência e Valor tenham a mesma importância.
scaler = StandardScaler()
dados_escalados = scaler.fit_transform(dados_ml)

# 2.2 Transformar em DataFrame (opcional, mas ajuda a manter a organização)
dados_escalados_df = pd.DataFrame(dados_escalados, columns=dados_ml.columns)


# =================================================================
# PASSO 3: ENCONTRAR O K IDEAL (MÉTODO DO COTOVELO)
# =================================================================

inercia = []
K_range = range(1, 11) # Vamos testar de 1 a 10 clusters

for k in K_range:
    # random_state=42 garante que os resultados sejam sempre os mesmos
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(dados_escalados)
    inercia.append(kmeans.inertia_)

# Visualização do Cotovelo
plt.figure(figsize=(10, 6))
plt.plot(K_range, inercia, marker='o', linestyle='--')
plt.title('Método do Cotovelo: Encontrando o K Ideal')
plt.xlabel('Número de Clusters (K)')
plt.ylabel('Inércia')
plt.grid(True)
plt.show()

# ⚠️ ANALISE O GRÁFICO! ⚠️
# Escolha o ponto onde a curva "dobra" (o cotovelo).
# Por exemplo, se o cotovelo estiver em K=4, defina k_ideal = 4.
k_ideal = 4 # Substitua isso pelo valor que você encontrar no gráfico!


# =================================================================
# PASSO 4: TREINAMENTO FINAL E ATRIBUIÇÃO DO CLUSTER
# =================================================================

# 4.1 Treinamento Final
kmeans_final = KMeans(n_clusters=k_ideal, random_state=42, n_init=10)
kmeans_final.fit(dados_escalados)

# 4.2 Adicionar o resultado (o número do cluster) ao seu DataFrame original
rfv_df['Cluster'] = kmeans_final.labels_


# =================================================================
# PASSO 5: ANÁLISE E VALOR DE NEGÓCIO
# =================================================================

# 5.1 Perfilando os clusters: Média de cada métrica por grupo
perfil_cluster = rfv_df.groupby('Cluster')[['RECENCIA', 'FREQUENCIA', 'VALOR_MONETARIO']].mean()

print("\n--- Perfil Médio de Cada Cluster (Seus Insights!) ---")
# Ordenar pelo Valor, para facilitar a visualização dos grupos mais ricos
print(perfil_cluster.sort_values(by='VALOR_MONETARIO', ascending=False))

# 5.2 Salvamento do Resultado (A TERCEIRA TABELA FINAL)
rfv_df.to_excel('clientes_clusterizados_final.xlsx', index=False)
print("\nArquivo 'clientes_clusterizados_final.xlsx' salvo com sucesso!")